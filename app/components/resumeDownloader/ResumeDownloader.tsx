import { Button } from "@mantine/core";

export default function ResumeDownloader() {
  const onButtonClick = async () : Promise<void> => {
    const response = await fetch("ZarateBrandon_resume.pdf");
    const blob = await response.blob();
    const fileURL = window.URL.createObjectURL(blob);
    let alink = document.createElement("a");
    alink.href = fileURL;
    alink.download = "ZarateBrandon_resume.pdf";
    alink.click();
  };

  return (
    <Button color='red'variant="outline" radius="md" onClick={onButtonClick}>
      Resume
    </Button>
  );
}