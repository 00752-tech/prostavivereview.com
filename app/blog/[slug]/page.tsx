import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowLeft, Check } from 'lucide-react'
import { notFound, redirect } from 'next/navigation'
import { BlogPostSchema } from '@/components/BlogPostSchema'

// This data should ideally come from a CMS or API
const blogPosts = [
{
  slug: "prostate-health-40s-50s",
  title: "Prostate Health for Men in Their 40s and 50s: A Crucial Guide",
  description: "Learn essential strategies for maintaining optimal prostate health during this crucial age period. Discover preventive measures and proactive steps for a healthier future.",
  date: "2024-12-27",
  image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&h=400",
  alt: "Middle-aged man discussing health with a doctor, representing proactive prostate care",
  content: {
    introduction: `As men enter their 40s and 50s, prostate health becomes increasingly important. This comprehensive guide explores essential strategies and preventive measures to ensure optimal prostate function during these crucial decades.`,
    sections: [
      {
        title: "Understanding Prostate Health in Your 40s and 50s",
        content: `During these decades, the prostate gland may begin to undergo changes that can affect your health and quality of life. Taking proactive steps during this time can help prevent or minimize future problems and maintain optimal prostate function.`
      },
      {
        title: "Key Prevention Strategies",
        items: [
          "Regular prostate screenings and check-ups",
          "Maintaining a healthy diet rich in prostate-friendly foods",
          "Regular exercise and physical activity",
          "Stress management and adequate sleep",
          "Natural supplements for prostate support"
        ]
      },
      {
        title: "Diet and Nutrition",
        content: `A healthy diet is crucial for maintaining prostate health. Focus on:`
      },
      {
        title: "Exercise and Lifestyle",
        content: `Regular physical activity plays a vital role in maintaining prostate health. Aim for:`
      }
    ],
    dietTips: [
      "Plenty of fruits and vegetables, especially tomatoes and leafy greens",
      "Whole grains and legumes",
      "Healthy fats from sources like olive oil and avocados",
      "Limited red meat and dairy consumption",
      "Adequate hydration with water"
    ],
    exerciseTips: [
      "30 minutes of moderate exercise daily",
      "Regular strength training",
      "Pelvic floor exercises",
      "Stress-reducing activities like yoga or meditation",
      "Maintaining a healthy weight"
    ]
  }
},
{
  slug: "prostate-health-young-men",
  title: "Prostate Health for Young Men: Why It Matters Now",
  description: "Learn why young men should prioritize prostate health and discover preventive measures for long-term prostate wellness.",
  date: "2024-12-26",
  image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&h=400",
  alt: "Young man maintaining an active lifestyle for prostate health",
  content: {
    introduction: `While prostate health is often associated with older men, taking care of your prostate should start early. Understanding and maintaining prostate health in your younger years can lead to better outcomes later in life.`,
    sections: [
      {
        title: "Why Start Early?",
        content: `Prevention is key when it comes to prostate health. Starting healthy habits early can significantly reduce your risk of developing prostate issues later in life.`
      },
      {
        title: "Key Prevention Strategies for Young Men",
        items: [
          "Establish healthy dietary habits early",
          "Maintain regular physical activity",
          "Stay hydrated and limit alcohol consumption",
          "Learn about family history of prostate issues",
          "Consider early prostate health screenings if at risk"
        ]
      },
      {
        title: "Lifestyle Choices That Matter",
        content: `Your daily choices can impact your long-term prostate health. Focus on:`
      }
    ],
    dietTips: [
      "Include plenty of fruits and vegetables",
      "Choose whole grain foods",
      "Limit processed foods and sugary drinks",
      "Incorporate healthy fats",
      "Stay well-hydrated"
    ],
    exerciseTips: [
      "Regular cardiovascular exercise",
      "Strength training 2-3 times per week",
      "Maintain a healthy weight",
      "Practice stress management",
      "Get adequate sleep"
    ]
  }
},
{
  slug: "holistic-prostate-health",
  title: "Holistic Prostate Health: Integrating ProstaVive into Your Wellness Routine",
  description: "Discover how to take a holistic approach to prostate health by combining ProstaVive with lifestyle changes, diet, and natural remedies.",
  date: "2024-12-25",
  image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&h=400",
  alt: "Holistic health concept with natural ingredients and wellness items",
  content: {
    introduction: `A holistic approach to prostate health involves considering multiple factors that contribute to overall well-being. Learn how to integrate ProstaVive with other natural approaches for optimal prostate health.`,
    sections: [
      {
        title: "Understanding Holistic Prostate Care",
        content: `Holistic health considers the whole person - body, mind, and spirit. When it comes to prostate health, this means addressing multiple aspects of wellness.`
      },
      {
        title: "Key Components of Holistic Care",
        items: [
          "Natural supplements like ProstaVive",
          "Dietary modifications",
          "Physical activity and exercise",
          "Stress management and mental wellness",
          "Regular health screenings"
        ]
      },
      {
        title: "Natural Approaches",
        content: `Incorporate these natural approaches into your daily routine:`
      }
    ],
    dietTips: [
      "Anti-inflammatory foods",
      "Organic produce when possible",
      "Herbal teas and supplements",
      "Probiotic-rich foods",
      "Plant-based protein sources"
    ],
    exerciseTips: [
      "Yoga and stretching",
      "Meditation and mindfulness",
      "Regular walking or swimming",
      "Qigong or tai chi",
      "Deep breathing exercises"
    ]
  }
},
{
  slug: "natural-prostate-remedies",
  title: "Natural Prostate Remedies: A Comprehensive Guide",
  description: "Explore effective natural remedies for supporting prostate health and managing common prostate conditions.",
  date: "2024-12-24",
  image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&h=400",
  alt: "Various natural herbs and supplements used for prostate health",
  content: {
    introduction: `Natural remedies have been used for centuries to support prostate health. This guide explores evidence-based natural approaches to maintaining optimal prostate function.`,
    sections: [
      {
        title: "Understanding Natural Remedies",
        content: `Natural remedies can offer gentle yet effective support for prostate health when used properly and consistently.`
      },
      {
        title: "Popular Natural Remedies",
        items: [
          "Saw Palmetto",
          "Beta-sitosterol",
          "Pygeum",
          "Stinging Nettle",
          "Pumpkin Seed Extract"
        ]
      },
      {
        title: "Herbal Support",
        content: `Consider these herbal approaches for prostate health:`
      }
    ],
    dietTips: [
      "Green tea consumption",
      "Turmeric and ginger",
      "Zinc-rich foods",
      "Selenium-rich foods",
      "Antioxidant-rich berries"
    ],
    exerciseTips: [
      "Kegel exercises",
      "Regular walking",
      "Pelvic floor stretches",
      "Light resistance training",
      "Stress-reducing activities"
    ]
  }
},
{
  slug: "prostate-friendly-foods-list",
  title: "Prostate Friendly Foods List: Nourishing Your Prostate Health",
  description: "Discover a comprehensive list of foods that support prostate health and learn how to incorporate them into your diet.",
  date: "2024-12-23",
  image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&h=400",
  alt: "A colorful array of fruits, vegetables, nuts, and fish that are beneficial for prostate health",
  content: {
    introduction: `Your diet plays a crucial role in maintaining prostate health. Learn about the best foods to include in your diet and how they can support optimal prostate function.`,
    sections: [
      {
        title: "Power Foods for Prostate Health",
        content: `Certain foods have been shown to have particular benefits for prostate health. Include these in your diet:`
      },
      {
        title: "Key Nutrients for Prostate Health",
        items: [
          "Lycopene-rich foods",
          "Omega-3 fatty acids",
          "Zinc and selenium",
          "Antioxidants",
          "Plant-based proteins"
        ]
      },
      {
        title: "Foods to Include",
        content: `Make these foods a regular part of your diet:`
      }
    ],
    dietTips: [
      "Tomatoes and tomato products",
      "Fatty fish like salmon",
      "Nuts and seeds",
      "Cruciferous vegetables",
      "Berries and citrus fruits"
    ],
    exerciseTips: [
      "Regular meal timing",
      "Proper portion control",
      "Mindful eating practices",
      "Food preparation methods",
      "Healthy snacking habits"
    ]
  }
},
{
  slug: "prostate-cancer-symptoms",
  title: "Prostate Cancer Symptoms: Early Detection and When to Seek Help",
  description: "Learn about the common symptoms of prostate cancer, risk factors, and when to consult a healthcare professional.",
  date: "2024-12-22",
  image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&h=400",
  alt: "Prostate cancer awareness ribbon and stethoscope",
  content: {
    introduction: `Understanding the symptoms of prostate cancer is crucial for early detection and successful treatment. Learn about the warning signs and when to seek medical attention.`,
    sections: [
      {
        title: "Common Symptoms",
        content: `While early prostate cancer often has no symptoms, watch for these signs:`
      },
      {
        title: "Warning Signs",
        items: [
          "Frequent urination, especially at night",
          "Difficulty starting or stopping urination",
          "Weak or interrupted urine flow",
          "Blood in urine or semen",
          "Pain or burning during urination"
        ]
      },
      {
        title: "Risk Factors",
        content: `Several factors can increase your risk of prostate cancer:`
      }
    ],
    dietTips: [
      "Cancer-fighting foods",
      "Anti-inflammatory diet",
      "Limited processed foods",
      "Reduced red meat intake",
      "Increased plant-based foods"
    ],
    exerciseTips: [
      "Regular physical activity",
      "Stress management",
      "Adequate sleep",
      "Weight management",
      "Regular health screenings"
    ]
  }
},
{
  slug: "prostate-health-supplements",
  title: "Prostate Health Supplements: A Comprehensive Guide",
  description: "Explore popular prostate health supplements, their potential benefits, and how to choose the right one for you.",
  date: "2024-12-21",
  image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=800&h=400",
  alt: "Various prostate health supplements and natural ingredients",
  content: {
    introduction: `Navigating the world of prostate supplements can be overwhelming. This guide helps you understand different supplements, their benefits, and how to choose the right one for your needs.`,
    sections: [
      {
        title: "Common Prostate Supplements",
        content: `Several supplements are commonly used for prostate health:`
      },
      {
        title: "Key Ingredients to Look For",
        items: [
          "Saw Palmetto Extract",
          "Beta-sitosterol",
          "Pygeum Africanum",
          "Zinc",
          "Selenium"
        ]
      },
      {
        title: "Choosing Quality Supplements",
        content: `Consider these factors when selecting a supplement:`
      }
    ],
    dietTips: [
      "Third-party testing",
      "Ingredient transparency",
      "Manufacturing standards",
      "Bioavailability",
      "Clinical research support"
    ],
    exerciseTips: [
      "Consistent supplement routine",
      "Proper dosage adherence",
      "Regular monitoring",
      "Healthcare provider consultation",
      "Lifestyle integration"
    ]
  }
},
{
  slug: "understanding-prostate-health",
  title: "Understanding Prostate Health: A Guide for Men",
  description: "Learn about prostate health, common issues, and preventive measures in this comprehensive guide for men's health.",
  date: "2024-12-24",
  image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800",
  alt: "Senior man discussing prostate health with medical professional, demonstrating the importance of regular check-ups",
  content: {
    introduction: `Understanding your prostate health is crucial for maintaining overall well-being. This comprehensive guide covers everything you need to know about prostate health, common issues, and prevention strategies.`,
    sections: [
      {
        title: "What is the Prostate?",
        content: `The prostate is a small but vital gland in the male reproductive system. Understanding its function and common issues is essential for maintaining good health.`
      },
      {
        title: "Common Prostate Issues",
        items: [
          "Benign Prostatic Hyperplasia (BPH)",
          "Prostatitis",
          "Prostate Cancer",
          "Urinary Problems",
          "Sexual Function Issues"
        ]
      },
      {
        title: "Prevention Strategies",
        content: `Take these steps to maintain prostate health:`
      }
    ],
    dietTips: [
      "Balanced nutrition",
      "Proper hydration",
      "Antioxidant-rich foods",
      "Limited alcohol",
      "Healthy fats"
    ],
    exerciseTips: [
      "Regular exercise",
      "Stress management",
      "Regular check-ups",
      "Healthy weight maintenance",
      "Active lifestyle"
    ]
  }
},
{
  slug: "prostavive-vs-other-supplements",
  title: "ProstaVive vs. Other Prostate Supplements: An In-Depth Comparison",
  description: "Compare ProstaVive with other prostate supplements and discover what makes it stand out in the market.",
  date: "2024-01-14",
  image: "https://prostavive.org/home-assets/images/bottles.png",
  alt: "ProstaVive supplement bottles showing premium natural prostate support formula",
  content: {
    introduction: `With numerous prostate supplements available, it's important to understand what sets ProstaVive apart. This comprehensive comparison helps you make an informed decision about your prostate health supplement choice.`,
    sections: [
      {
        title: "Why Choose ProstaVive?",
        content: `ProstaVive stands out from other supplements due to its unique formulation and commitment to quality.`
      },
      {
        title: "Key Advantages",
        items: [
          "Clinically proven ingredients",
          "Superior absorption",
          "Comprehensive formula",
          "Quality manufacturing",
          "Money-back guarantee"
        ]
      },
      {
        title: "Quality Differences",
        content: `ProstaVive maintains high standards in:`
      }
    ],
    dietTips: [
      "Premium ingredients",
      "Scientific formulation",
      "Optimal dosages",
      "Quality testing",
      "Natural components"
    ],
    exerciseTips: [
      "Easy administration",
      "Consistent results",
      "Regular monitoring",
      "Professional support",
      "Lifestyle integration"
    ]
  }
},
{
  slug: "diet-lifestyle-prostate-health",
  title: "The Impact of Diet and Lifestyle on Prostate Health",
  description: "Explore how diet and lifestyle choices affect prostate health and learn practical tips for maintaining optimal prostate function.",
  date: "2024-01-13",
  image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800",
  alt: "Healthy Mediterranean diet foods beneficial for prostate health including nuts, vegetables, and olive oil",
  content: {
    introduction: `Your diet and lifestyle choices play a crucial role in maintaining prostate health. Learn how to make informed decisions that support optimal prostate function and overall well-being.`,
    sections: [
      {
        title: "Diet's Impact on Prostate Health",
        content: `What you eat can significantly affect your prostate health. Focus on these dietary principles:`
      },
      {
        title: "Lifestyle Factors",
        items: [
          "Regular exercise routine",
          "Stress management",
          "Adequate sleep",
          "Weight management",
          "Social connections"
        ]
      },
      {
        title: "Making Healthy Choices",
        content: `Incorporate these healthy habits into your daily routine:`
      }
    ],
    dietTips: [
      "Mediterranean diet principles",
      "Plant-based foods",
      "Healthy fats",
      "Limited processed foods",
      "Proper hydration"
    ],
    exerciseTips: [
      "Daily physical activity",
      "Strength training",
      "Flexibility exercises",
      "Stress reduction",
      "Active social life"
    ]
  }
}
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  // First check if it's a video content URL
  if (params.slug.startsWith('video-content/')) {
    // Redirect to the actual video content page
    const videoSlug = params.slug.replace('video-content/', '')
    return redirect(`/video-content/${videoSlug}`)
  }

  const post = blogPosts.find(post => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/blog" className="inline-flex items-center text-blue-600 hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Blog
      </Link>

      <div className="relative h-[400px] w-full mb-8">
        <Image 
          src={post.image}
          alt={post.alt}
          fill
          className="object-cover rounded-xl"
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </div>

      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <p className="text-gray-600 mb-8">Published on {post.date}</p>

      <div className="prose max-w-none">
        <p className="text-lg mb-6">{post.description}</p>
        
        {post.content && (
          <>
            <p className="text-lg mb-8">{post.content.introduction}</p>

            {post.content.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                {section.content && <p className="mb-4">{section.content}</p>}
                {section.items && (
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Dietary Recommendations</h3>
                <ul className="space-y-2">
                  {post.content.dietTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Exercise & Lifestyle Tips</h3>
                <ul className="space-y-2">
                  {post.content.exerciseTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 my-8">
        <h2 className="text-2xl font-semibold mb-4">Take Action for Your Prostate Health</h2>
        <p className="mb-6">
          Don't wait until problems arise. Take proactive steps to support your prostate health with ProstaVive's 
          natural, scientifically-formulated supplement.
        </p>
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link href="https://prostavivereview.com/api/sale">
            Try ProstaVive Risk-Free Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>

      <BlogPostSchema
        title={post.title}
        description={post.description}
        datePublished={post.date}
        imageUrl={post.image}
        authorName="ProstaVive Team"
      />
    </article>
  )
}

