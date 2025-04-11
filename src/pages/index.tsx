import {Header} from "@/components/header/Header";
import {HeaderStub} from "@/components/header/HeaderStub";
import {MainBlock} from "@/components/MainBlock";
import {FontProvider} from "@/providers/FontProvider";

export default function Home() {
  return (
      <FontProvider>
        <div>
            <HeaderStub/>
            <Header/>
            <MainBlock/>
        </div>
      </FontProvider>
  );
}
