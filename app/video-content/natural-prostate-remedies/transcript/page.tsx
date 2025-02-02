import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function NaturalProstateRemediesTranscript() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/video-content/natural-prostate-remedies" className="inline-flex items-center text-blue-600 hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Video
      </Link>

      <h1 className="text-3xl font-bold mb-6">Natural Prostate Remedies: Video Transcript</h1>
      
      <div className="prose prose-lg max-w-none">
        <p>[00:00:00] So there's one food that you want to eat if you want to shrink an enlarged prostate. Prostate is a gland that wraps around this little tube underneath your bladder, and when it gets bigger - normally it should be like the size of a walnut - when it enlarges, it kind of interferes with the urine flow. And that can keep you up at night, and an enlarged prostate can also turn into a cancer situation. And the name that they use for this enlarged prostate is called benign prostatic hyperplasia.</p>

        <p>[00:00:35] What's involved here? Well, this is kind of what the theory is: in order for the prostate to enlarge, you have to have certain types of hormones that activate it. Okay, and one is called testosterone, because testosterone is an anabolic hormone that, you know, helps your muscles grow. So testosterone, through the help of a certain enzyme, will convert into DHT, which is a more powerful form of testosterone. And apparently, this DHT is involved in the enlargement of the prostate.</p>

        <p>[00:01:08] And so the mechanism of one of the top-selling drugs for this condition inhibits that enzyme to reduce DHT. As we age, testosterone goes down, DHT also goes down, and also as men age, the prostate enlarges. So how can that be a solution since DHT is normally lower as we get older? It's very confusing. So in other words, apparently, the real problem is that as we age, that enzyme increases in its activity, thereby giving you more DHT and creating a more profound effect over the prostate.</p>

        <p>[00:01:49] As far as the top medication, which I'm not going to mention, they found that by taking the medication, you can decrease the enlargement of your prostate by about 23%. But there's some slight minor complications, side effects: decreased libido, increased risk of prostate cancer, as well as a syndrome that can occur when you stop taking the medication. And that syndrome has other side effects like signs of suicidal impulses, atrophy of the penis, and the development of breast tissue. But other than that, it's totally fine.</p>

        <p>[00:02:26] The question is, is there a natural inhibitor of this enzyme? The answer is yes. In one study, it showed that it can decrease the risk of a prostate enlargement by 21% and prostate cancer. This natural enzyme inhibitor also decreases inflammation, it has a very potent antioxidant effect, and the name of this compound is called lycopene.</p>

        <p>[00:03:02] Now, lycopene is called a carotenoid, which is a kind of a category of a lot of different plant-based compounds. And lycopene is in watermelon, it's in carrot, and it's even in grapefruit. But if you want to get a large amount of lycopene, you want to get it from tomatoes. If you can get them from your garden or the farmers market, that would be great. You can get them as canned tomatoes or tomato sauce or tomato paste because apparently, the lycopene in tomatoes becomes more bioavailable when you heat the tomato. Of course, don't get the tomato sauce that has the sugar added; get the one that's as natural as possible.</p>

        <p>[00:03:38] Now, the other interesting thing about lycopene is it's a fat-soluble compound, which means that if you're cooking with tomatoes, you want to add a little olive oil with it because the extra fat with heat will help extract more of that lycopene from it. If you just include maybe twice a week some type of tomato dish, whether these tomatoes are on your salad or in some type of dish, that would be a really great thing for your prostate.</p>

        <p>[00:04:10] So there are other things you can take to help your prostate. Zinc is at the top of the list. Resveratrol is another compound that they used with lycopene. Now, as a side note, probably the worst thing for the prostate is milk because there are certain growth hormones in milk that can enlarge the prostate as well. And even when I was in practice, I remember several older men coming in and explaining that every time they consume some dairy, when they would wake up the next morning, they had a much worse time urinating, probably because of the enlargement of the prostate. So dairy is something you would want to avoid.</p>

        <p>[00:04:10] Now that you know the best food for the prostate, the next thing you need to know is what to avoid. There are four things to avoid to prevent an enlarged prostate, and I put that in this video right here. Check it out.</p>
      </div>

      <div className="mt-8">
        <Button asChild>
          <Link href="/video-content/natural-prostate-remedies">Watch the Video</Link>
        </Button>
      </div>
    </div>
  )
}

