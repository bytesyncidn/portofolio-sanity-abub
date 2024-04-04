import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { useLiveQuery } from 'next-sanity/preview'

import { readToken } from '~/lib/sanity/sanity.api'
import { getClient } from '~/lib/sanity/sanity.client'
import { urlForImage } from '~/lib/sanity/sanity.image'
import { getMedia, mediaQuery } from '~/lib/sanity/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'
import { Media } from '~/types'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    medias: Media[]
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const medias = await getMedia(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      medias,
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [medias] = useLiveQuery<Media[]>(props.medias, mediaQuery)

  return (
    <section className="flex gap-2 p-10">
      {medias.map((m, i) => (
        <div key={i} className="h-[200px] w-[200px]">
          <Image
            src={urlForImage(m.mainImage).url()}
            alt={m.title}
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </section>
  )
}
