import Document, {Html, Head, Main, NextScript} from "next/document";
import EmotionRootStyleRegistry from './EmotionRootStyleRegistry';
// will apply to the whole page
class MyDocument extends Document{
    render() {
        return<Html lang={"en"}>
            <Head>
                <link
                    rel="preload"
                    href="/fonts/IBMPlexSans-Bold.ttf"
                    as="font"
                    crossOrigin="anonymous"
                ></link>
                <link
                    rel="preload"
                    href="/fonts/IBMPlexSans-Regular.ttf"
                    as="font"
                    crossOrigin="anonymous"
                ></link>
                <link
                    rel="preload"
                    href="/fonts/IBMPlexSans-SemiBold.ttf"
                    as="font"
                    crossOrigin="anonymous"
                ></link>
            </Head>
            <body>
                <Main />
                <NextScript/>
            </body>

        </Html>
    }
}

export default MyDocument;