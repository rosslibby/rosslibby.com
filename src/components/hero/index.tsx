import Image from 'next/image';
import Link from 'next/link';
import { Block, Blocks, BlockTitle } from '@/components';

type HeroProps = {
  title: string
  subtitle?: string
}
export const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <>
      <Blocks>
        <BlockTitle
          title={title}
          subtitle={subtitle}
        />
      </Blocks>
      <Blocks columns="repeat(3, 1fr)" style={{ maxWidth: '40rem', zIndex: 2 }}>
        <OuterLink
          style={{
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
export const OuterLink = ({ alias, logo, name, style, url }: OuterLinkProps) => (
  <Block style={style}>
    <Link href={url} target="_blank">
      <Image src={logo} width={32} height={32} alt={name} />
    </Link>
    <p>
      <Link href={url} target="_blank">{alias}</Link>
    </p>
    <h3 style={{
      fontSize: '14px',
      fontWeight: 700,
      }}>{name}</h3>
  </Block>
);
