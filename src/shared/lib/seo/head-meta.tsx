import Head from 'next/head'

type Props = {
  description?: string
  favicon?: string
  title?: string
}

export const HeadMeta = ({
  description = 'Небольшое приложение для компании «Делаем IT»',
  favicon = '/favicon.png',
  title = 'Кошелек',
}: Props) => {

  return (
    <Head>
      <title itemProp={'headline'}>{title}</title>
      <meta content={description} name={'description'} />
      <meta content={'width=device-width, initial-scale=1'} name={'viewport'} />
      <link href={favicon} rel={'icon'} />
      <meta content={'ru'} property={'og:locale'} />
      <meta content={title} property={'og:title'} />
      <meta content={favicon} property={'og:image'} />
      <meta content={description} property={'og:description'} />
    </Head>
  )
}
