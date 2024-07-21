
import React from 'react';
import { SocialIcon } from 'react-social-icons';

const SocialLinks = () => {
  // List of social media URLs you want to include
  const socialUrls = [
    'https://www.linkedin.com/in/nhuzaa/',
    'https://www.twitter.com/nhuzaa',
    'https://www.instagram.com/__nhuzaa',
    'https://www.github.com/nhuzaa',
    'https://stackoverflow.com/users/7104332/rohit-sthapit',
    'https://www.twitch.tv/nhuzaa__',
    'https://www.youtube.com/@nhuzaa',
    'https://tiktok.com/@__nhuzaa?',
    'https://medium.com/@nhuzaa',
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
      {socialUrls.map((url, index) => (
        <SocialIcon key={index} url={url} fgColor="#ffffff"  bgColor="#333333" target="_blank"/>
      ))}
    </div>
  );
};

export default SocialLinks;