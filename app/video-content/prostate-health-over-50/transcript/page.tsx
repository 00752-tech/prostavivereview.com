import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function ProstateHealthOver50Transcript() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/video-content/prostate-health-over-50" className="inline-flex items-center text-blue-600 hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Video
      </Link>

      <h1 className="text-3xl font-bold mb-6">Prostate Health for Men Over 50: Video Transcript</h1>
      
      <div className="prose prose-lg max-w-none">
        <p>[00:00:00] (light music) The prostate is a vital element of the male biological reproductive system. It's about the size and shape of a walnut. But if left unchecked, this small gland can cause big problems. Prostate cancer is one of the most common cancers affecting people with male reproductive organs. Each year, close to 200,000 Americans receive a diagnosis of prostate cancer. About one in nine people with a prostate will receive a prostate cancer diagnosis during their lifetime. This includes men, transgender women, intersex people, and non-binary people with biologically male sex organs.</p>

        <p>[00:00:44] One of the best indicators of whether you're at risk for prostate cancer is your family history. You're two to three times more likely to get prostate cancer if your biological father, brother, or son has the disease. Another risk factor is age. Your chances of developing prostate cancer increase as you get older. It's most common after age 50, and more than half of cases occur in people over age 65. There are some other risk factors, too, including race, weight, and whether you smoke. But the reality is the prostate cancer can and does affect men of all backgrounds and lifestyles.</p>

        <p>[00:01:20] Early stage prostate cancer rarely causes symptoms, but as the disease progresses, you may experience certain warning signs. So what should you be on the lookout for? Knowing the symptoms of prostate cancer will help you keep an eye out for any concerning changes to your health. Keep in mind, though, these symptoms do not indicate trouble with your prostate. And in fact, most all of them come standard with aging. But if you experience several symptoms or have other concerns, it may be a good idea to visit a urologist.</p>

        <p>[00:01:54] Most men will have trouble urinating as they age. You might experience a slow or weak urine flow, or your urine flow might start and stop beyond your ability to control it. Though this isn't usually due to prostate cancer, it may be a good idea to get your prostate checked. A rare but early sign of prostate trouble is unexplained pain in the area of your prostate, especially when you're sitting down. This could also indicate a prostate infection, but only your urologist can say for certain.</p>

        <p>[00:02:38] A tumor on the prostate can put pressure on your bladder and urethra, so take note if you start to feel a frequent and sometimes urgent need to urinate, especially at night. You might also feel pain or a burning sensation when you urinate, a condition known as dysuria. This condition is most commonly associated with urinary tract infections, but it can sometimes be a sign of prostate cancer.</p>

        <p>[00:03:16] You could experience a loss of bladder control. As well as problems controlling your bowel movements. It may hurt when you ejaculate, or you may not be able to keep an erection. And you may notice blood in your semen or urine. Finally, as prostate cancer progresses, it may cause pain in your lower back, hips or chest. As well as numbness in your legs or feet. Again, none of these is a surefire sign of prostate cancer, but they might warrant a visit to the urologist.</p>

        <p>[00:03:59] There's no way to eliminate your risk of getting prostate cancer, but if you're at higher risk for developing the disease, there are steps you can take to lower your risk. Get regular prostate screenings, maintain a healthy weight, exercise regularly, eat a nutritious diet, and quit smoking. Prostate cancer is a serious disease, but early detection is key. Talk to your doctor about your risk factors and when or if you should be screened for prostate cancer, sometimes as early as age 40, if you're considered high risk.</p>

        <p>[00:04:36] When prostate cancer is diagnosed before it spreads to other parts of the body, about 97% of people live at least five years after diagnosis. So pay attention to your prostate. It may be small, but knowing the warning signs can benefit your health in a big way. (gentle music)</p>
      </div>

      <div className="mt-8">
        <Button asChild>
          <Link href="/video-content/prostate-health-over-50">Watch the Video</Link>
        </Button>
      </div>
    </div>
  )
}

