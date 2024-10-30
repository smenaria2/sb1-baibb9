import React from 'react';
import { Sparkles } from 'lucide-react';

interface GreetingCardProps {
  name: string;
  photo: string | null;
}

export function GreetingCard({ name, photo }: GreetingCardProps) {
  return (
    <div className="w-full h-full relative bg-diwali bg-cover bg-center">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      <div className="relative h-full flex flex-col items-center justify-center p-8 space-y-8">
        {/* Animated Diyas */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="animate-pulse absolute top-4 left-4">
            <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"></div>
          </div>
          <div className="animate-pulse absolute top-4 right-4 delay-100">
            <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"></div>
          </div>
          <div className="animate-pulse absolute bottom-4 left-4 delay-200">
            <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"></div>
          </div>
          <div className="animate-pulse absolute bottom-4 right-4 delay-300">
            <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center space-y-8 max-w-2xl">
          <h2 className="text-6xl font-bold text-yellow-500 mb-4 animate-text-glow">
            दीपावली की हार्दिक शुभकामनाएं
          </h2>

          {photo && (
            <div className="relative w-96 h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-full animate-spin-slow"></div>
              <img
                src={photo}
                alt={name}
                className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] object-cover rounded-full"
              />
            </div>
          )}

          <div className="space-y-6">
            <p className="text-4xl text-white animate-fade-in">
              <span className="font-semibold text-5xl block mb-4 text-yellow-300">{name}</span>
              की ओर से आप सभी को दीपावली की ढेर सारी शुभकामनाएं
            </p>
            
            <p className="text-3xl text-yellow-100 animate-fade-in-delay">
              मां लक्ष्मी का आशीर्वाद आप पर सदा बना रहे।
              यह दीपावली आपके जीवन में खुशियां और समृद्धि लेकर आए।
            </p>
          </div>

          {/* Sparkle Effects */}
          <div className="absolute top-0 right-0 animate-bounce delay-100">
            <Sparkles className="text-yellow-500 w-12 h-12" />
          </div>
          <div className="absolute bottom-0 left-0 animate-bounce delay-300">
            <Sparkles className="text-yellow-500 w-12 h-12" />
          </div>
        </div>

        {/* Watermark */}
        <div className="absolute bottom-8 left-8 text-white/70 text-xl font-semibold">
          navsrijan.in
        </div>
      </div>
    </div>
  );
}