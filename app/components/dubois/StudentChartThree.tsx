import { ClientOnly } from "remix-utils";
import DoublePendulum from "~/components/dubois/Pendulum.client";

export default function StudentChartThree() {
  return <ClientOnly>{() => <DoublePendulum />}</ClientOnly>;
}
