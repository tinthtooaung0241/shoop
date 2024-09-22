import getBillboard from "@/action/get-billboard";
import Billboard from "../components/billboard";
import Container from "../components/ui/container";

export default async function Home() {
  const billboard = await getBillboard("a98f0c48-f4ce-4019-884a-f9559cba00e8");
  console.log(billboard.imageUrl);
  return (
    <>
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard data={billboard} />
        </div>
      </Container>
    </>
  );
}
