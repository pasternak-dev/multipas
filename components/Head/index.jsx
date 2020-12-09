import Head from 'next/head';
import 'styles/main.scss'

export default (props) => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <link rel="icon" href="/assets/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="New generation online cinema. Opening in 2021" />
            <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
            <link rel="stylesheet" href="/assets/css/media.css"/>
            <title>Multipas | {props.page}</title>
        </Head>
    )
}