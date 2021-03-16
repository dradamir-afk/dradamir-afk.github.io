import RandomVacancy from '../components/RandomVacancy'
import VacancySearchField from '../components/VacancySearchField'
import AsideFilter from '../components/AsideFilter'
export default function Vacancy() {
  return (
    <div className="flex items-center flex-col w-full ">
        <RandomVacancy/>
        <div className="flex w-full justify-center">
          <VacancySearchField/>
        </div>

     </div>
    // <div className="min-h-screen min-w-full bg-gray-200 flex items-center flex-col">
    //   <RandomVacancy/>
    // </div>
  )
}
//"flex justify-center w-full  my-2"