import Link from 'next/link';
import { Block, Blocks, Code } from '@/components';
import { PackageHeader as Header } from './header';

type NpmPackageProps = {
  index: number;
  id: string;
  name: string;
  docs: string;
  insights: string[];
  reverse?: boolean;
  description: string;
  origin?: string;
  link: {
    title: string;
    url: string;
  };
};
export const NpmPackage = (props: NpmPackageProps) => {
  const {
    id,
    name,
    docs,
    reverse,
  } = props;
  const attrs = {
    columns: '6fr 6fr',
    ...(reverse ? { reverse: true } : {}),
  };

  return (
    <>
      <hr />
      <Header id={id} name={name} url={docs} />
      <hr />
      <Blocks {...attrs}>
        <Body {...props} />
      </Blocks>
    </>
  );
};

const Body = ({ index, description, origin, link, insights }: NpmPackageProps) => {
  if (index % 2) {
    return <>
      <Block style={{ padding: 0 }}>
        <Code code={insights.join('\n')} />
      </Block>
      <Block>
        <h5>{description}</h5>
        {origin && <em>{origin}</em>}
        <Link
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >{link.title}</Link>
      </Block>
    </>
  } else {
    return <>
      <Block>
        <h5>{description}</h5>
        {origin && <em>{origin}</em>}
        <Link
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >{link.title}</Link>
      </Block>
      <Block style={{ padding: 0 }}>
        <Code code={insights.join('\n')} />
      </Block>
    </>
  }
};
