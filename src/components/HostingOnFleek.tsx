import ImageWithCopy from "@components/ImageWithCopy";
import RainbowHeart from "@components/RaibowHeart";
import imgHostingOnFleek from "@images/hosting-on-fleek.png";

import type { RoundedType } from "@components/PageSection";

interface Props {
  rounded?: RoundedType;
  optImgHostingOnFleek: ReactNode;
}

const HostingOnFleek: React.FC<Props> = ({ rounded, optImgHostingOnFleek }) => (
  <ImageWithCopy
    kicker="hosting"
    floatingImageEffect
    className="pb-64 pt-24 xl:py-40"
    headline={
      <>
        Web3 devs <RainbowHeart /> hosting on Fleek
      </>
    }
    copy="All you need is a repo or a template to get your app live in under a minute. Comes with built in CI/CD, IPFS content addressing, decentralized storage (Filecoin/Arweave) and CDN/Edge (Fleek Network soon™)."
    cta={{ url: "https://app.fleek.xyz/", text: "try it out" }}
    rounded={rounded}
  >
    <div className="flex w-full">
      { optImgHostingOnFleek }
    </div>
  </ImageWithCopy>
);

export default HostingOnFleek;
