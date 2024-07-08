import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Read my thoughts on software development, design, and more.',
};

export default async function Resume() {
  return (
    <section>
        <h1> Resume</h1>
    </section>
  );
}
