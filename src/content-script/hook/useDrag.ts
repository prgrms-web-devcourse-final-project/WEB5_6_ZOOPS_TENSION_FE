import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

const STORAGE_KEY = 'SCRAP_BUTTON_POSITION';

export const useDrag = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: window.innerWidth - 150,
    y: 50,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [rel, setRel] = useState<{ x: number; y: number } | null>(null);

  // 스크랩 버튼 위치 저장
  useLayoutEffect(() => {
    chrome.storage.local.get([STORAGE_KEY], (result) => {
      if (result[STORAGE_KEY]) {
        setPosition(result[STORAGE_KEY]);
      }
    });
  }, []);

  // 마우스 다운 핸들러
  const handleDragStart = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.button !== 0) return;
    const { pageX, pageY } = e;
    setIsDragging(true);

    setRel({
      x: pageX - position.x,
      y: pageY - position.y,
    });

    e.preventDefault();
  };

  // drag end 핸들러
  const handleDragEnd = useCallback(
    (e: MouseEvent) => {
      setIsDragging(false);
      setTimeout(() => {
        chrome.storage.local.set({ [STORAGE_KEY]: position });
      }, 0);
      e.preventDefault();
    },
    [position]
  );

  const handleDragging = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !rel) return;

      const newPos = {
        x: e.pageX - rel.x,
        y: e.pageY - rel.y,
      };
      setPosition(newPos);
      e.preventDefault();
    },
    [setPosition, rel, isDragging]
  );

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleDragging);
      window.addEventListener('mouseup', handleDragEnd);
    } else {
      window.removeEventListener('mousemove', handleDragging);
      window.removeEventListener('mouseup', handleDragEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleDragging);
      window.removeEventListener('mouseup', handleDragEnd);
    };
  }, [isDragging, handleDragging, handleDragEnd]);

  return {
    position,
    isDragging,
    handleDragStart,
  };
};
