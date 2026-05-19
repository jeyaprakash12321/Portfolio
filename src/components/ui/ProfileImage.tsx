'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProfileImageProps {
  src: string;
  alt: string;
  size?: number;
}

export const ProfileImage: React.FC<ProfileImageProps> = ({
  src,
  alt,
  size = 300,
}) => {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="relative"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 bg-clip-border"
      />
      <motion.div
        animate={{
          boxShadow: [
            '0 0 20px rgba(59, 130, 246, 0.5)',
            '0 0 40px rgba(168, 85, 247, 0.8)',
            '0 0 20px rgba(59, 130, 246, 0.5)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="relative rounded-full overflow-hidden border-8 border-background p-1"
      >
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="rounded-full w-full h-auto"
          priority
        />
      </motion.div>
    </motion.div>
  );
};
