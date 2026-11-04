import { useState, useEffect, useRef, useCallback } from 'react';
import { VoiceSettings } from '../types/index.ts';

const SETTINGS_KEY = 'tka_biologi_tts_settings';

export function useTTS() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentNarrativeType, setCurrentNarrativeType] = useState<string | null>(null);
  const [currentText, setCurrentText] = useState<string>('');
  const [supported, setSupported] = useState(false);

  const [settings, setSettings] = useState<VoiceSettings>(() => {
    try {
      const saved = localStorage.getItem(SETTINGS_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return {
      rate: 0.96,
      volume: 1.0,
      voiceURI: '',
      autoPlayIntro: true,
    };
  });

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Load voices
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setSupported(false);
      return;
    }
    setSupported(true);

    const updateVoices = () => {
      const available = window.speechSynthesis.getVoices();
      setVoices(available);

      // Prefer Indonesian voices (id-ID or id_ID)
      const indonesianVoices = available.filter(
        (v) => v.lang.toLowerCase().includes('id') || v.lang.toLowerCase().includes('ind')
      );

      // Prefer female Indonesian voice if found (Gadis, Damayanti, Putri, Google Bahasa Indonesia, etc.)
      const femaleIndo = indonesianVoices.find(
        (v) =>
          v.name.toLowerCase().includes('female') ||
          v.name.toLowerCase().includes('wanita') ||
          v.name.toLowerCase().includes('gadis') ||
          v.name.toLowerCase().includes('putri') ||
          v.name.toLowerCase().includes('siti')
      ) || indonesianVoices[0];

      if (settings.voiceURI) {
        const found = available.find((v) => v.voiceURI === settings.voiceURI);
        if (found) {
          setSelectedVoice(found);
          return;
        }
      }

      if (femaleIndo) {
        setSelectedVoice(femaleIndo);
      } else if (available.length > 0) {
        // Fallback to first available or standard english
        setSelectedVoice(available[0]);
      }
    };

    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices;

    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [settings.voiceURI]);

  // Persist settings
  useEffect(() => {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch {
      // ignore
    }
  }, [settings]);

  const stop = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentNarrativeType(null);
  }, []);

  const pause = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  }, []);

  const resume = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    }
  }, []);

  const speak = useCallback(
    (text: string, narrativeType?: string) => {
      if (typeof window === 'undefined' || !('speechSynthesis' in window) || !text) {
        return;
      }

      // Always stop any running speech first
      window.speechSynthesis.cancel();

      const cleanText = text
        .replace(/[*_#`~[\]]/g, ' ') // strip markdown
        .replace(/\s+/g, ' ')
        .trim();

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = settings.rate;
      utterance.volume = settings.volume;
      utterance.lang = 'id-ID';

      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      utterance.onstart = () => {
        setIsPlaying(true);
        setIsPaused(false);
        setCurrentNarrativeType(narrativeType || 'general');
        setCurrentText(cleanText);
      };

      utterance.onend = () => {
        setIsPlaying(false);
        setIsPaused(false);
        setCurrentNarrativeType(null);
      };

      utterance.onerror = (e) => {
        // 'interrupted' is normal when user switches speech
        if (e.error !== 'interrupted' && e.error !== 'canceled') {
          console.warn('TTS error:', e.error);
        }
        setIsPlaying(false);
        setIsPaused(false);
        setCurrentNarrativeType(null);
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    },
    [settings.rate, settings.volume, selectedVoice]
  );

  const replay = useCallback(() => {
    if (currentText) {
      speak(currentText, currentNarrativeType || undefined);
    }
  }, [currentText, currentNarrativeType, speak]);

  const updateRate = (rate: number) => {
    setSettings((prev) => ({ ...prev, rate }));
  };

  const updateVolume = (volume: number) => {
    setSettings((prev) => ({ ...prev, volume }));
  };

  const updateVoice = (voiceURI: string) => {
    const v = voices.find((item) => item.voiceURI === voiceURI);
    if (v) {
      setSelectedVoice(v);
      setSettings((prev) => ({ ...prev, voiceURI }));
    }
  };

  return {
    supported,
    voices,
    selectedVoice,
    isPlaying,
    isPaused,
    currentNarrativeType,
    currentText,
    settings,
    speak,
    pause,
    resume,
    stop,
    replay,
    updateRate,
    updateVolume,
    updateVoice,
  };
}
