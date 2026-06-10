import emailjs from "@emailjs/browser"
import { useMemo, useState, type FormEvent } from "react"

interface FormValues {
  name: string
  email: string
  message: string
}

type SubmitState = "idle" | "sending" | "success" | "error"

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
}

function buildMailto(values: FormValues, contactEmail: string) {
  const subject = `Portfolio enquiry from ${values.name}`
  const body = [`Name: ${values.name}`, `Email: ${values.email}`, "", values.message].join("\n")

  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function useContactForm(contactEmail: string) {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [submitState, setSubmitState] = useState<SubmitState>("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const isEmailJsEnabled = useMemo(
    () =>
      Boolean(
        import.meta.env.VITE_EMAILJS_SERVICE_ID &&
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      ),
    [],
  )

  function updateField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      setSubmitState("error")
      setStatusMessage("Please complete all fields before sending your message.")
      return
    }

    setSubmitState("sending")
    setStatusMessage("")

    try {
      if (isEmailJsEnabled) {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
          {
            from_name: values.name,
            from_email: values.email,
            message: values.message,
            reply_to: values.email,
          },
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string,
          },
        )

        setSubmitState("success")
        setStatusMessage("Thanks for reaching out. Your message has been sent successfully.")
        setValues(initialValues)
        return
      }

      window.location.assign(buildMailto(values, contactEmail))
      setSubmitState("success")
      setStatusMessage(
        "EmailJS is not configured yet, so your mail client will open with a prefilled message.",
      )
    } catch {
      setSubmitState("error")
      setStatusMessage("Something went wrong while sending your message. Please try again.")
    }
  }

  return {
    values,
    updateField,
    handleSubmit,
    submitState,
    statusMessage,
    isEmailJsEnabled,
  }
}
