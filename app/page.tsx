import Typography from "@/components/Typography";
import { AppEnv } from "@/config/env";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-4 card-custom">
      <h4 className="h3">Welcome</h4>
      <Typography variant="p" className="lead text-pretty text-red-juice body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, eligendi,
        ratione voluptatibus voluptas fugiat corrupti culpa tenetur quaerat nemo
        corporis quas pariatur ea in doloremque dolor molestias, quasi porro
        omnis!
      </Typography>
      <Typography variant="h2" className="body2">
        Welcome {AppEnv.API_VERSION}
      </Typography>
    </div>
  );
}
