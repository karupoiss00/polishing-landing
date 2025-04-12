import {Header} from "@/blocks/header/Header";
import {HeaderStub} from "@/blocks/header/HeaderStub";
import {MainBlock} from "@/blocks/mainBlock/MainBlock";
import {FontProvider} from "@/providers/FontProvider";
import {AboutPolishing} from "@/blocks/aboutPolishingBlock/AboutPolishing";

export default function Home() {
  return (
      <FontProvider>
        <div>
            <HeaderStub/>
            <Header/>
            <MainBlock/>
            <AboutPolishing/>
        </div>
      </FontProvider>
  );
}
