import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'
import * as contentful from 'contentful'

const Post = (props) => (
    <Layout>
        <div className="jumbotron">
            <h1 className="display-6">{props.entry.fields.episodeTitle}</h1>
            <p className="lead">{props.entry.fields.shortDescription}</p>
            <hr className="my-4" />
            {/* <img src={props.entry.fields.episodeCover.fields.file.url} /> */}
            <p>{props.entry.fields.description}</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>
    </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query

  const client = contentful.createClient({
    space: 'eujavmhqi0bc',
    environment: 'master', 
    accessToken: 'd39122afa8820357cc5f76bf5f90e20fe33fcc2a54e0b8fee151753be390fa47'
  })

  const entry = await client.getEntry(id)

  return { entry }
}

export default Post