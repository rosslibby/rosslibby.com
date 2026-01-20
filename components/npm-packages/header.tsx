import { Block, Blocks } from '@/components';
import { Target } from './target';

type HeaderProps = {
  id: string;
  name: string;
  url: string;
  targeting?: boolean;
};
export const PackageHeader = ({ targeting, ...props }: HeaderProps) => {
  const Wrapper = targeting ? TargetHeader : BasicHeader;

  return (
    <Blocks>
      <Block>
        <Wrapper {...props}>
          <h3>{props.name}</h3>
        </Wrapper>
      </Block>
    </Blocks>
  );
};

type TargetProps = {
  id: string;
  name: string;
  url: string;
  children: React.ReactNode;
};

const BasicHeader = ({ children }: {
  children: React.ReactNode;
}) => <>{children}</>;
const TargetHeader = ({ children, ...props }: TargetProps) => (
  <Target {...props}>{children}</Target>
);
