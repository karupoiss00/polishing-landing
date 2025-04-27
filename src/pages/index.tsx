import {Header} from "@/blocks/header/Header";
import {HeaderStub} from "@/blocks/header/HeaderStub";
import {MainBlock} from "@/blocks/mainBlock/MainBlock";
import {FontProvider} from "@/providers/FontProvider";
import {AboutPolishing} from "@/blocks/aboutPolishingBlock/AboutPolishing";
import Head from "next/head";
import config from '../config/config.json'
import {LetOrderBlock} from "@/blocks/letOrderBlock/LetOrderBlock";
import {RatingBlock} from "@/blocks/rating/RatingBlock";
import {Footer} from "@/blocks/footer/Footer";

export default function Home() {
  return (
      <FontProvider>
          <Head>
              <title>{config.title}</title>
              <meta name="description" content="Удаление царапин с дисплея Apple Watch, без вскрытия, гарантия, срочные заказы, оценим по фото."/>
              <meta name="keywords" content="Полировка apple watch,стекла,полировка,дисплея,экрана,iwatch,watch,эплвотч,эплчасы "/>
              <meta property="og:url" content="https://karupoiss00.github.io/polishing-landing/"/>
              <meta property="og:title" content="Удаление царапин со стекла Apple Watch"/>
              <meta property="og:description" content="Полировка Apple Watch"/>
          </Head>
        <div>
            <HeaderStub/>
            <Header/>
            <MainBlock/>
            <AboutPolishing/>
            <LetOrderBlock/>
            <RatingBlock/>
            <Footer/>
        </div>
      </FontProvider>
  );
}
