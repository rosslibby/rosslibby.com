import Image from 'next/image'
import Link from 'next/link'
import { Block, Blocks } from '@/components'
import styles from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Blocks>
        <Block className={styles.repo}>
          <div style={{display: 'flex', gap: '0.75rem'}}>
            <Image
              src="github-mark.svg"
              width={26}
              height={26}
              alt="Check out my website's source code"
            />
            <p>Check out my website's <Link
              href="https://github.com/rosslibby/rosslibby.com"
              target="_blank"
            >source code</Link></p>
          </div>
        </Block>
      </Blocks>
    </footer>
  )
}
