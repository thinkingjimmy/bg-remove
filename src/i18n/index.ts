import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      title: 'BGNix',
      subtitle: '100% Free & Privacy Image Background Removal',
      description: 'The free, privacy-first AI tool that removes backgrounds instantly – no subscriptions, no uploads to any server. 100% Local Processing.',
      subDescription: 'Perfect for professional photos, product images, and more.',
      dropzoneTitle: 'Drag and drop images here',
      dropzoneSubtitle: 'or click to select files',
      dropzoneActive: 'Drop the images here...',
      alertTitle: 'Heads up!',
      alertDescription: 'All images are processed locally on your device and are not uploaded to any server.',
      sampleTitle: 'No image? Try one of these:',
      loading: 'Loading background removal model...',
      switchingModel: 'Switching models...',
      footer: 'Built with ❤️ by <a>Jimmy</a> using Transformers.js',
      model: 'Model:',
      faqTitle: 'Frequently Asked Questions',
      faqQuestion1: '1. How does BGNix work? Why is it free and privacy preserving?',
      faqAnswer1: 'It uses the <a>Transformers.js</a> library to generate images. All images are generated on your browser, that means no images are sent to the server and no images are stored on the server. In other words, you can use it for free and it is privacy preserving.',
      faqQuestion2: '2. Why are some images not getting good results after background removal?',
      faqAnswer2: 'Background removal is a very challenging task due to the complexity of backgrounds and similarity between foreground and background, which can lead to less than ideal results. Here are some tips to get better results:',
      faqQuestion3: '3. What formats of images does BGNix support?',
      faqAnswer3: 'We support JPEG, PNG formats.',
      faqQuestion4: '4. How do I make a background transparent?',
      faqAnswer4: 'Removing the background from your photo will automatically make the background transparent. Your new image will download as a PNG file, which supports transparency, so you can place your newly edited image on any background you like.',
      faqQuestion5: '5. How to use BGNix?',
      faqAnswer5: {
        step1: 'Drag and drop your image into the dropzone or click to select files.',
        step2: 'Wait for the model to load.',
        step3: 'Download the new image with transparent background.',
      },
      faqQuestion6: '6. Are there any limitations?',
      faqAnswer6: {
        answer1: 'Maximum file size: 10MB per image',
        answer2: 'Processing time varies based on image size and complexity',
        answer3: 'Requires modern browser with WebAssembly support',
        answer4: 'Internet connection needed for first - time model download',
      },
      faqTips: {
        tip1: 'Use images with solid color or simple backgrounds',
        tip2: 'Use images where there\'s high contrast between foreground and background',
        tip3: 'Or try using more advanced background removal models, though these may require more computing power than your device has. In that case, you may need to use cloud services - you can try my other AI product <a>Comflowy</a>.'
      },
      imageTypes: {
        people: 'People',
        animal: 'Animal',
        product: 'Product',
        car: 'Car'
      },
      compareSlider: 'The pictures of the different subjects all worked out well',
      support_project: 'Support this project'
    }
  },
  zh: {
    translation: {
      title: 'BGNix - 100%免费且保护隐私',
      subtitle: '使用优化的iOS背景移除',
      description: '免费、保护隐私的AI工具，即时移除背景 – 无需订阅，无需上传图片到服务器。100%本地处理。',
      subDescription: '适用于专业照片、产品图片等。',
      dropzoneTitle: '拖拽图片到这里',
      dropzoneSubtitle: '或点击选择文件',
      dropzoneActive: '放开以上传图片...',
      alertTitle: '注意！',
      alertDescription: '所有图片都在你的设备上本地处理，不会上传到任何服务器。',
      sampleTitle: '没有图片？试试这些：',
      loading: '正在加载背景移除模型...',
      switchingModel: '正在切换模型...',
      footer: '由 <a>Jimmy</a> 用 Transformers.js 构建',
      model: '模型：',
      faqTitle: '常见问题',
      faqQuestion1: '1. BGNix 是如何工作的？为什么它是免费且保护隐私的？',
      faqAnswer1: '它使用 <a>Transformers.js</a> 库来生成图像。所有图像都在您的浏览器中生成，这意味着没有图像会被发送到服务器，也没有图像会存储在服务器上。这意味着您可以免费使用它，并且它能保护隐私。',
      faqQuestion2: '2. 为什么有些图片在移除背景后效果不理想？',
      faqAnswer2: '由于背景的复杂性以及前景和背景之间的相似性，背景移除是一项非常具有挑战性的任务，这可能导致效果不理想。以下是一些获得更好效果的建议：',
      faqQuestion3: '3. BGNix 支持什么格式的图片？',
      faqAnswer3: '我们支持 JPEG, PNG 格式的图片。',
      faqQuestion4: '4. 如何使背景透明？',
      faqAnswer4: '移除照片背景后，背景会自动变为透明。你的新图片将以支持透明的 PNG 文件下载，因此你可以将新编辑的图片放在任何你喜欢的背景上。',
      faqQuestion5: '5. 如何使用 BGNix？',
      faqAnswer5: {
        step1: '拖拽图片到拖放区或点击选择文件。',
        step2: '等待模型加载。',
        step3: '下载带有透明背景的新图片。',
      },
      faqQuestion6: '6. BGNix 有什么限制吗？',
      faqAnswer6: {
        answer1: '最大文件大小：10MB/图片',
        answer2: '处理时间取决于图片大小和复杂性',
        answer3: '需要现代浏览器支持WebAssembly',
        answer4: '首次下载模型需要互联网连接',
      },
      faqTips: {
        tip1: '使用纯色或简单背景的图片',
        tip2: '使用前景和背景对比度高的图片',
        tip3: '或者尝试使用更高级的背景移除模型，但这些可能需要比您的设备更强大的计算能力。在这种情况下，你可以尝试我的另一个AI产品 <a>Comflowy</a>。'
      },
      imageTypes: {
        people: '人物',
        animal: '动物',
        product: '产品',
        car: '汽车'
      },
      support_project: '支持本项目'
    }
  },
  ja: {
    translation: {
      title: 'BGNix - 100%無料＆プライバシー保護',
      subtitle: '最適化されたiOS背景削除を使用',
      description: '無料でプライバシー重視のAIツール、瞬時に背景を削除 – サブスクリプション不要、サーバーへのアップロード不要。100%ローカル処理。',
      subDescription: 'プロフェッショナルな写真、商品画像などに最適。',
      dropzoneTitle: 'ここに画像をドラッグ＆ドロップ',
      dropzoneSubtitle: 'またはクリックしてファイルを選択',
      dropzoneActive: '画像をドロップしてください...',
      alertTitle: 'お知らせ！',
      alertDescription: 'すべての画像はお使いのデバイスでローカルに処理され、サーバーにアップロードされることはありません。',
      sampleTitle: '画像がありませんか？これらを試してみてください：',
      loading: '背景削除モデルを読み込んでいます...',
      switchingModel: 'モデルを切り替えています...',
      footer: '<a>Jimmy</a> が Transformers.js で愛情を込めて制作',
      model: 'モデル：',
      faqTitle: 'よくある質問',
      faqQuestion1: '1. BGNixはどのように動作しますか？なぜ無料でプライバシーが保護されるのですか？',
      faqAnswer1: '<a>Transformers.js</a>ライブラリを使用して画像を生成します。すべての画像はブラウザ上で生成され、サーバーに送信されることも保存されることもありません。そのため、無料で使用でき、プライバシーも保護されます。',
      faqQuestion2: '2. なぜ一部の画像で背景削除の結果が良くないのですか？',
      faqAnswer2: '背景の複雑さや前景と背景の類似性により、背景削除は非常に困難なタスクであり、理想的な結果が得られないことがあります。より良い結果を得るためのヒントを以下に示します：',
      faqQuestion3: '3. BGNixはどのような画像形式をサポートしていますか？',
      faqAnswer3: 'JPEG, PNG 形式の画像をサポートしています。',
      faqQuestion4: '4. 背景を透明にするにはどうすればいいですか？',
      faqAnswer4: '背景を削除した後、背景は自動的に透明になります。新しい画像は PNG ファイルとしてダウンロードされ、透明性をサポートしているため、あなたが好きな背景に新しく編集した画像を配置できます。',
      faqQuestion5: '5. BGNix の使用方法',
      faqAnswer5: {
        step1: '画像をドラッグ＆ドロップするか、クリックしてファイルを選択します。',
        step2: 'モデルが読み込まれるのを待ちます。',
        step3: '背景が削除された新しい画像をダウンロードします。',
      },
      faqQuestion6: '6. 制限はありますか？',
      faqAnswer6: {
        answer1: '最大ファイルサイズ：10MB/画像',
        answer2: '処理時間は画像サイズと複雑性によって異なります',
        answer3: 'WebAssembly をサポートする現代のブラウザが必要です',
        answer4: '初回モデルダウンロードにはインターネット接続が必要です',
      },
      faqTips: {
        tip1: '単色または単純な背景の画像を使用する',
        tip2: '前景と背景のコントラストが高い画像を使用する',
        tip3: 'より高度な背景削除モデルを試してみてください。ただし、お使いのデバイスよりも高い計算能力が必要になる場合があります。その場合は、クラウドサービスを使用する必要があるかもしれません - 私の他のAI製品 <a>Comflowy</a> をお試しください。',
      },
      imageTypes: {
        people: '人物',
        animal: '動物',
        product: '製品',
        car: '車'
      },
      support_project: '本プロジェクトを支持する'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['navigator', 'querystring', 'cookie', 'localStorage', 'sessionStorage', 'htmlTag'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      lookupSessionStorage: 'i18nextLng',
      caches: ['localStorage', 'cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 