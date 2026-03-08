(function () {
  async function loadExamDatasetText(dataset) {
    const embedded = window.EXAM_DATASET_CONTENTS && window.EXAM_DATASET_CONTENTS[dataset.id];
    if (window.location.protocol === 'file:' && typeof embedded === 'string') {
      return embedded;
    }

    try {
      const response = await fetch(dataset.path, { cache: 'no-store' });
      if (!response.ok) {
        throw new Error(`無法載入 ${dataset.path}`);
      }
      return await response.text();
    } catch (error) {
      if (typeof embedded === 'string') {
        console.warn(`fetch 載入 ${dataset.path} 失敗，改用內嵌資料`, error);
        return embedded;
      }
      throw error;
    }
  }

  window.loadExamDatasetText = loadExamDatasetText;
})();
