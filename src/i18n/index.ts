import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      title: 'BGNix - 100% Free & Privacy Preserved',
      subtitle: 'Using optimized iOS background removal',
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
      footer: 'Built with ❤️ by Jimmy using Transformers.js',
      model: 'Model:',
      faqTitle: 'Frequently Asked Questions',
      faqQuestion1: 'How does BGNix work? Why is it free and privacy preserving?',
      faqAnswer1: 'It uses the <a>Transformers.js</a> library to generate images. All images are generated on your browser, that means no images are sent to the server and no images are stored on the server. That means you can use it for free and it is privacy preserving.',
      faqQuestion2: 'Why are some images not getting good results after background removal?',
      faqAnswer2: 'Background removal is a very challenging task due to the complexity of backgrounds and similarity between foreground and background, which can lead to less than ideal results. Here are some tips to get better results:',
      faqTips: {
        tip1: 'Use images with solid color or simple backgrounds',
        tip2: 'Use images where there\'s high contrast between foreground and background',
        tip3: 'Or try using more advanced background removal models, though these may require more computing power than your device has. In that case, you may need to use cloud services - you can try my other AI product <a>Comflowy</a>.'
      }
    }
  },
  zh: {
    translation: {
      title: 'BGNix - 100%免费且保护隐私',
      subtitle: '使用优化的iOS背景移除',
      description: '免费、保护隐私的AI工具，即时移除背景 – 无需订阅，无需上传到服务器。100%本地处理。',
      subDescription: '适用于专业照片、产品图片等。',
      dropzoneTitle: '拖拽图片到这里',
      dropzoneSubtitle: '或点击选择文件',
      dropzoneActive: '放开以上传图片...',
      alertTitle: '提示！',
      alertDescription: '所有图片都在您的设备上本地处理，不会上传到任何服务器。',
      sampleTitle: '没有图片？试试这些：',
      loading: '正在加载背景移除模型...',
      switchingModel: '正在切换模型...',
      footer: '由 Jimmy 用 Transformers.js 充满爱心地构建',
      model: '模型：',
      faqTitle: '常见问题',
      faqQuestion1: 'BGNix 是如何工作的？为什么它是免费且保护隐私的？',
      faqAnswer1: '它使用 <a>Transformers.js</a> 库来生成图像。所有图像都在您的浏览器中生成，这意味着没有图像会被发送到服务器，也没有图像会存储在服务器上。这意味着您可以免费使用它，并且它能保护隐私。',
      faqQuestion2: '为什么有些图片在移除背景后效果不理想？',
      faqAnswer2: '由于背景的复杂性以及前景和背景之间的相似性，背景移除是一项非常具有挑战性的任务，这可能导致效果不理想。以下是一些获得更好效果的建议：',
      faqTips: {
        tip1: '使用纯色或简单背景的图片',
        tip2: '使用前景和背景对比度高的图片',
        tip3: '或者尝试使用更高级的背景移除模型，但这些可能需要比您的设备更强大的计算能力。在这种情况下，您可能需要使用云服务 - 您可以尝试我的另一个AI产品 <a>Comflowy</a>。'
      }
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
      footer: 'Jimmy が Transformers.js で愛情を込めて制作',
      model: 'モデル：',
      faqTitle: 'よくある質問',
      faqQuestion1: 'BGNixはどのように動作しますか？なぜ無料でプライバシーが保護されるのですか？',
      faqAnswer1: '<a>Transformers.js</a>ライブラリを使用して画像を生成します。すべての画像はブラウザ上で生成され、サーバーに送信されることも保存されることもありません。そのため、無料で使用でき、プライバシーも保護されます。',
      faqQuestion2: 'なぜ一部の画像で背景削除の結果が良くないのですか？',
      faqAnswer2: '背景の複雑さや前景と背景の類似性により、背景削除は非常に困難なタスクであり、理想的な結果が得られないことがあります。より良い結果を得るためのヒントを以下に示します：',
      faqTips: {
        tip1: '単色または単純な背景の画像を使用する',
        tip2: '前景と背景のコントラストが高い画像を使用する',
        tip3: 'より高度な背景削除モデルを試してみてください。ただし、お使いのデバイスよりも高い計算能力が必要になる場合があります。その場合は、クラウドサービスを使用する必要があるかもしれません - 私の他のAI製品 <a>Comflowy</a> をお試しください。'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 