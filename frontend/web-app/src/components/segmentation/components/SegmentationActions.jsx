import MagicButton from "../../common/MagicButton";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../../../locales/namespaces";

export default function SegmentationActions({
  masks,
  processImage,
  reSegmentImage,
  imageURL,
  loading,
  selected,
  sendSelected,
}) {
  const { t } = useTranslation(NAMESPACES.editor);

  return (
    <div className="flex flex-col gap-4">
      {masks.length === 0 ? (
        <MagicButton processImage={processImage} isDisabled={!imageURL || loading} name={t("segment")} />
      ) : (
        <MagicButton processImage={reSegmentImage} isDisabled={!imageURL || loading} name={t("resegment")} />
      )}
      
      {selected.length !== 0 && (
        <Button
          onClick={sendSelected}
          className="h-20 rounded-[2rem] bg-rose-500 hover:bg-rose-600 text-white font-black text-xl uppercase tracking-widest shadow-xl animate-in fade-in slide-in-from-right-4 duration-500"
        >
          {t("sendSelected")}
        </Button>
      )}
    </div>
  );
}
