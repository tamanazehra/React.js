import Card from "./Card.jsx";
import pfp from './assets/pfp.png';
import pfp2 from './assets/pfp2.png';
import pfp3 from './assets/pfp3.png';
import pfp4 from './assets/pfp4.png';
import pfp5 from './assets/pfp5.png';

function App() {
  return (
    <div className="card-container">
      <Card name="Tamana Zehra" description="Web Developer" img={pfp} />
      <Card name="Maryam Mirza" description="Full-Stack Developer" img={pfp2} />
      <Card name="Ali Raza" description="Software Engineer" img={pfp3} />
      <Card name="Sara Khan" description="Data Scientist" img={pfp4} />
      <Card name="Usman Ali" description="Machine Learning Engineer" img={pfp5} />
      <Card name="Ayesha Noor" description="UI/UX Designer" img={pfp} />
      <Card name="Bilal Ahmed" description="DevOps Engineer" img={pfp2} />
      <Card name="Fatima Bibi" description="Cybersecurity Analyst" img={pfp3} />
      <Card name="Hassan Ali" description="Cloud Architect" img={pfp4} />
      <Card name="Zainab Fatima" description="Blockchain Developer" img={pfp5} />
      <Card name="Omar Khan" description="Game Developer" img={pfp} />
      <Card name="Nida Shah" description="Mobile App Developer" img={pfp2} />
      <Card name="Raza Ali" description="AI Researcher" img={pfp3} />
      <Card name="Sana Malik" description="Systems Analyst" img={pfp4} />
      <Card name="Tariq Javed" description="Network Engineer" img={pfp5} />
      <Card name="Zara Ahmed" description="Technical Writer" img={pfp} />
      <Card name="Kashif Iqbal" description="Database Administrator" img={pfp2} />
      <Card name="Amina Khan" description="Web Designer" img={pfp3} />
    </div>
  );
}

export default App;

