import Layout from "@theme/Layout";
import DiscordCard from '../components/contact/DiscordCard';
import ForumCard from '../components/contact/ForumCard';
import MatrixCard from '../components/contact/MatrixCard';

export default function Contact() {
    return (
        <Layout title='Contact'>
            <h1 className='text--center margin-top--lg'>Contact</h1>

            <main className='margin-top--md margin-bottom--lg'>
                <section className='container'>
                    <div className='row'>
                        <div className='col col--4 margin-bottom--md d-flex'>
                            <MatrixCard />
                        </div>
                        <div className='col col--4 margin-bottom--md d-flex'>
                            <DiscordCard />
                        </div>
                        <div className='col col--4 margin-bottom--md d-flex'>
                            <ForumCard />
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}
