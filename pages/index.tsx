import Layout from '@/components/Layout';
import CommonCard from '@/components/common-card';
import cardImage1 from '../public/images/card-image2.jpg'; 
import CardLayered from '@/components/card-layer';

const name  = 'Rudimentary Investment App'

const Home = () => {
  return (
    <Layout>
      <section className="contianer-fluid mx-auto bg-slate-500">
        <div className="flex p-4">
          <div className=" flex flex-col">
            <h1 className='text-center text-4xl text-slate-900'>{name}</h1>
            <CommonCard title="Welcome" description="Lorem ipsum dilor Lorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilor Lorem ipsum dilor Lorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilor Lorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilor Lorem ipsum dilor Lorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilor Lorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilor " cardImage={cardImage1} switchPlace={false}/>
            <CommonCard title="Your Team is ready to help" description="Lorem ipsum dilor Lorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilor Lorem ipsum dilor Lorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilor Lorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilor Lorem ipsum dilor Lorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilor Lorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilorLorem ipsum dilor " cardImage={cardImage1} switchPlace={true}/>
            <CardLayered authorImage={cardImage1} authorName="Zara Bailey" authorDetail="Certified Financial Planner" buttonName='Ask A Question' linkName='Learn more about Zara and her team' showAuthor={true}/>
            <CardLayered  buttonName='Share Feedback' linkName='Get Help With A Specific Issue' showAuthor={false}/>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
