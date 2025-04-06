import { Progress } from "@material-tailwind/react";
 
const ProgressBar = () => {
  return (
    <>
    <div className="text-white w-5/5 md:w-full">
    <h1>Company Progress Bar</h1>
  <Progress value={85}  color="red" size="lg" label="Completed" />
  </div>
  </>
  )
}
export default ProgressBar