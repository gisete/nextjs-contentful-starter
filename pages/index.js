import Layout from '../components/Layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import * as contentful from 'contentful'
import { createClient } from '../common/contentful';

const titleStyle = {
    textTransform: 'unset',
    letterSpacing: '1px'
}

const Index = (props) => (
    <Layout>
        <div className="col-lg-8 justify-content-center">
            <h1 className="text-center">All Episodes</h1>

            <div className="list-group mt-5">
                {props.posts.map((post) => (
                <Link as={`/p/${post[0].fields.slug}`} href={`/post?id=${post[0].sys.id}`} key={post[0].sys.id}>
                    <a className="list-group-item list-group-item-action flex-column align-items-start">
                        <h6>Episode {post[0].fields.episodeNumber}</h6>
                        <div className="d-flex w-100 mt-3 justify-content-between">
                            <h4 className="mb-1" style={titleStyle}>{post[0].fields.episodeTitle}</h4>
                        </div>
                        <p className="mb-1 mt-2">{post[0].fields.shortDescription}</p>
                        
                    </a>
                </Link>
                ))}
            </div>
        </div>
    </Layout>
)

Index.getInitialProps = async function() {
  const client = createClient();

  const entries = await client.getEntries({
    content_type: 'podcast'
  })

  var result = Object.keys(entries.items).map(function(key) {
    return [entries.items[key]];
  });

    return {
        posts: result
    }
}

export default Index