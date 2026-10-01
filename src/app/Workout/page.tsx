
import Workoutcard from '@/Componets/Shared/Workoutcard';
import { Icards } from '@/types/cardstype';

const getwork = async () => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
  const data = await res.json();
  return data;
};

const Workout = async () => {
  const Workdata = await getwork();

  console.log(Workdata, "Workdata");

  return (
    <section className="min-h-screen bg-[#0b0d0e] p-6 md:p-8">
      
      <div className="mb-5 mx-auto max-w-[1440px]">
        <h1 className="text-4xl">THE LIBRARY</h1>
        <p>Twelve lifts covering every major muscle group.</p>
      </div>

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
     
        {Workdata.map((Workout: Icards, ind: number) => {
          return <Workoutcard key={ind} Workout={Workout} ind={ind} />;
        })}

      </div>
    </section>
  );
};

export default Workout;