import { CardHeader, Card } from "@/lib/components/ui/card"


type Props = {
  errors?: string[];
}

export function LoginErrorCard({ errors }: Props) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="bg-red-50 flex">
        <div className="flex items-center justify-start" role="alert">
          <AlertCircleIcon className="h-6 w-6 text-red-600 mr-2" />
          <div className="text-red-700 mr-2">Error</div>
        </div>
        {errors?.map((error, index) => (
          <p key={index} className="text-red-500 text-sm">・{error}</p>
        ))}
      </CardHeader>
    </Card>
  )
}


function AlertCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  )
}
