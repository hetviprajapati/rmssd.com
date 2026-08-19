'use client';

import { useState } from 'react';

interface VideoCardProps {
  id: string;
  alt: string;
  title: string;
  author: string;
}

export default function VideoCard({ id, alt, title, author }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const loadVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className="video-card" data-yid={id} onClick={!isPlaying ? loadVideo : undefined}>
      <div className="video-thumb">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt={alt} loading="lazy" />

            <span className="play-btn">▶</span>
          </>
        )}
      </div>

      <div className="video-caption">
        <strong>{title}</strong>
        <br />
        {author}
      </div>
    </div>
  );
}
