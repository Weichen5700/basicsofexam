(function () {
  const datasets = [
    {
      id: '115-main',
      label: '115年題庫',
      title: '115年題庫',
      path: 'uploadfile.txt',
      isNoteDataset: false
    },
       {
      id: '112-exam-118003-1',
      label: '112年測驗 118003-1',
      title: '112年測驗 118003-1',
      path: 'uploadfile_112_exam_118003_1.txt',
      isNoteDataset: false
    },
    {
      id: '113-exam-118003-1',
      label: '113年測驗 118003-1',
      title: '113年測驗 118003-1',
      path: 'uploadfile_113_exam_118003_1.txt',
      isNoteDataset: false
    },
    {
      id: '114-exam-118003-1',
      label: '114年測驗 118003-1',
      title: '114年測驗 118003-1',
      path: 'uploadfile_114_exam_118003_1.txt',
      isNoteDataset: false
    },
    {
      id: '114-exam-118003-2',
      label: '114年測驗 118003-2',
      title: '114年測驗 118003-2',
      path: 'uploadfile_114_exam_118003_2.txt',
      isNoteDataset: false
    }
  ];

  function getExamDatasetById(id) {
    return datasets.find(dataset => dataset.id === id) || null;
  }

  function sanitizeDatasetId(value) {
    return String(value || 'manual-upload')
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'manual-upload';
  }

  function createManualDataset(fileName) {
    const stem = (fileName || 'manual-upload').replace(/\.[^.]+$/u, '');
    return {
      id: 'manual-' + sanitizeDatasetId(stem),
      label: stem + ' (手動匯入)',
      title: stem + ' (手動匯入)',
      path: '',
      isNoteDataset: false,
      isManualDataset: true
    };
  }

  window.EXAM_DATASETS = datasets;
  window.getExamDatasetById = getExamDatasetById;
  window.createManualDataset = createManualDataset;
  window.sanitizeDatasetId = sanitizeDatasetId;
})();
