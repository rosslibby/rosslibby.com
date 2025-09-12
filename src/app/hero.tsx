import Image from 'next/image';
import Link from 'next/link';
import { Block, Blocks, BlockTitle, IconLink } from '@/components';

export const Hero = () => {
  return (
    <>
      <Blocks>
        <BlockTitle
          title="Fullstack Node/Typescript Maven"
          subtitle="From vision to production, I build software that lasts. I thrive on creating scalable systems and impactful user experiences that stand the test of time."
        />
      </Blocks>
      <Blocks columns="repeat(3, 1fr)" style={{
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '40rem',
        zIndex: 2,
      }}>
        <OuterLink
          style={{
            aspectRatio: 1,
            width: '8.5rem',
            alignItems: 'center',
            borderLeft: 'none',
            gap: '0.5rem',
            justifyContent: 'end',
          }}
          url="https://github.com/rosslibby"
          logo="github-mark.svg"
          alias="rosslibby"
          name="GitHub"
        />
        <OuterLink
          style={{
            aspectRatio: 1,
            width: '8.5rem',
            alignItems: 'center',
            gap: '0.75rem',
            justifyContent: 'center',
          }}
          url="https://www.linkedin.com/in/rosslibby"
          logo="/InBug-White.png"
          alias="in/rosslibby"
          name="LinkedIn"
        />
        <OuterLink
          style={{
            aspectRatio: 1,
            width: '8.5rem',
            alignItems: 'center',
            borderRight: 'none',
            gap: '0.75rem',
            justifyContent: 'start',
          }}
          url="https://www.npmjs.com/~rosslibby"
          logo="Npm-logo.svg"
          alias="~rosslibby"
          name="NPM"
        />
      </Blocks>
    </>
  );
};

type OuterLinkProps = {
  url: string;
  name: string;
  logo: string;
  alias: string;
  style: React.CSSProperties;
};
const OuterLink = ({ alias, logo, name, style, url }: OuterLinkProps) => (
  <Block style={{
    ...style,
    borderLeft: 'none',
    padding: 0,
  }}>
    <IconLink>
      <Image src={logo} width={32} height={32} alt={name} />
      <p>
        <Link href={url} target="_blank">{alias}</Link>
      </p>
    </IconLink>
    <h3 style={{ fontSize: '14px', fontWeight: 350, marginTop: '1rem' }}>{name}</h3>
  </Block>
);
