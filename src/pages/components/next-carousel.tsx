import style from '@/styles/Pv-carousel.module.css'
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

export default function NextCarousel({ children, gap = 12}: any) {
  const [instanceID, setInstanceID] = useState("pv_id");

  const list_of_cards = useMemo(() => {
    if (typeof window !== "undefined") {
      return document?.querySelectorAll(`#${instanceID} .pv_card`);
    }
  }, [instanceID]);

  useEffect(() => {
    setInstanceID("pv_" + crypto.randomUUID())
  }, []);
  return (
    <div id={instanceID}>
      <div className={style.pv_carousel}>
        {instanceID}
        <div className={style.pv_container} style={{gap:`${gap}px`}}>{children}</div>
      </div>
    </div>
  );
}
