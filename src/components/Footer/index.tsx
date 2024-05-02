import GridLayout from '@components/GridLayout';
import Container from '@components/Container';
import Text from '@components/Text';
import IconSocial from '@components/IconSocial';
import StatusBar from '@components/StatusBar';
import Link, { Target } from '@components/Link';
import config from './config';

const { company, legal, product, resources } = config;

const Footer = () => {
  return (
    <footer className="bg-ui-fleek-black pb-40 pt-80 text-ui-light-grey">
      <Container>
        <GridLayout>
          <div className="col-span-16 mb-24 flex flex-col md:col-span-3 md:mb-0">
            <img
              src="/svg/fleek-logo.svg"
              width={82}
              alt="fleek logo"
              className="mb-24"
            />
            <Text
              style="s"
              as="p"
              className="mb-16 max-w-[14rem] md:max-w-none"
            >
              Build lightning fast web3 apps on the edge.
            </Text>
            <div className="mb-16 flex gap-16">
              <a
                href="https://github.com/fleekxyz"
                rel="noopener noreferrer"
                target="_blank"
              >
                <IconSocial icon="github" />
              </a>
              <a
                href="https://twitter.com/fleekxyz/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <IconSocial icon="twitter" />
              </a>
              <a
                href="https://discord.gg/fleek"
                rel="noopener noreferrer"
                target="_blank"
              >
                <IconSocial icon="discord" />
              </a>
            </div>
            <div className="col-span-16 md:hidden">
              <StatusBar />
            </div>
          </div>
          <div className="col-span-16 md:col-span-12 md:col-start-5">
            <div className="grid grid-flow-dense grid-cols-12 flex-col gap-x-16 gap-y-24 md:grid md:gap-y-0">
              <div className="col-span-6 flex flex-col gap-12 md:col-span-3 md:gap-16">
                <Text style="caption-m">Resources</Text>
                <ul className="flex flex-col gap-10 md:gap-8">
                  {resources.map((item, index) => (
                    <li className="flex justify-start" key={index}>
                      <Link
                        href={item.url}
                        target={
                          item.target?.toLowerCase() === '_blank'
                            ? Target.Blank
                            : Target.Self
                        }
                      >
                        <Text style="caption-text">{item.text}</Text>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-6 flex flex-col gap-12 md:col-span-3 md:gap-16">
                <Text style="caption-m">Product</Text>
                <ul className="flex flex-col gap-10 md:gap-8">
                  {product.map((item, index) => (
                    <li className="flex justify-start" key={index}>
                      <Link
                        href={item.url}
                        target={
                          item.target?.toLowerCase() == '_blank'
                            ? Target.Blank
                            : Target.Self
                        }
                      >
                        <Text style="caption-text">{item.text}</Text>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-6 flex flex-col gap-12 md:col-span-3 md:gap-16">
                <Text style="caption-m">Company</Text>
                <ul className="flex flex-col gap-10 md:gap-8">
                  {company.map((item, index) => (
                    <li className="flex justify-start" key={index}>
                      <Link
                        href={item.url}
                        target={
                          item.target?.toLowerCase() == '_blank'
                            ? Target.Blank
                            : Target.Self
                        }
                      >
                        <Text style="caption-text">{item.text}</Text>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-6 flex flex-col gap-12 md:col-span-3 md:gap-16">
                <Text style="caption-m">Legal</Text>
                <ul className="flex flex-col gap-10 md:gap-8">
                  {legal.map((item, index) => (
                    <li className="flex justify-start" key={index}>
                      <Link
                        href={item.url}
                        target={
                          item.target?.toLowerCase() == '_blank'
                            ? Target.Blank
                            : Target.Self
                        }
                      >
                        <Text style="caption-text">{item.text}</Text>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-16 mt-24 hidden md:block">
            <StatusBar />
          </div>
        </GridLayout>
      </Container>
    </footer>
  );
};

export default Footer;