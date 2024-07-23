// "use client";
// import { FC, useMemo, useState } from "react";
// import Modal from "./Modal";
// import useMessageModal from "@/app/hooks/useMessages";
// import Heading from "../Heading";
// import Input from "../inputs/Input";
// import axios from "axios";
// import { toast } from "react-hot-toast";
// import { useRouter } from "next/navigation";
// import { useForm } from "react-hook-form";
// import { FieldValues, SubmitHandler } from "react-hook-form/dist/types";
// // import RecipientSelect from "../../inputs/RecipientSelect";

// enum MESSAGE_STEPS {
//   CONTENT = 0,
//   IMAGES = 1,
//   RECIPIENTS = 2,
// }

// interface MessageModalProps {}

// interface ImageUploadProps {
//   value: File | string;
//   onChange: (value: File | string) => void;
// }

// const ImageUpload: FC<ImageUploadProps> = ({ value, onChange }) => {
//   return (
//     <div>
//       {/* <input type="file" value={value} onChange={(e) => onChange(e.target.files[0])} /> */}
//     </div>
//   );
// };

// const MessageModal: FC<MessageModalProps> = () => {
//   const router = useRouter();
//   const messageModal = useMessageModal();

//   const [step, setStep] = useState(MESSAGE_STEPS.CONTENT);
//   const [isLoading, setIsLoading] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     watch,
//     formState: { errors },
//     reset,
//   } = useForm<FieldValues>({
//     defaultValues: {
//       content: "",
//       imageSrc: "",
//       recipients: [],
//     },
//   });

//   const content = watch("content");
//   const imageSrc = watch("imageSrc");
//   const recipients = watch("recipients");

//   const setCustomValue = (id: string, value: string | string[] | File) => {
//     setValue(id, value, {
//       shouldDirty: true,
//       shouldTouch: true,
//       shouldValidate: true,
//     });
//   };

//   const onBack = () => {
//     setStep((value) => value - 1);
//   };

//   const onNext = () => {
//     setStep((value) => value + 1);
//   };

//   const onSubmit: SubmitHandler<FieldValues> = (data) => {
//     if (step !== MESSAGE_STEPS.RECIPIENTS) {
//       return onNext();
//     }
//     setIsLoading(true);

//     axios
//       .post("/api/messages", data)
//       .then(() => {
//         toast.success("Message sent!");
//         router.refresh();
//         reset();
//         setStep(MESSAGE_STEPS.CONTENT);
//         messageModal.onClose();
//       })
//       .catch(() => {
//         toast.error("Something went wrong!");
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   };

//   const actionLabel = useMemo(() => {
//     if (step === MESSAGE_STEPS.RECIPIENTS) {
//       return "Send";
//     }

//     return "Next";
//   }, [step]);

//   const secondaryActionLabel = useMemo(() => {
//     if (step === MESSAGE_STEPS.CONTENT) {
//       return undefined;
//     }

//     return "Back";
//   }, [step]);

//   let bodyContent = (
//     <div className="flex flex-col gap-8">
//       <Heading title="What's your message?" subtitle="Type away!" />
//       <Input
//         id="content"
//         label="Content"
//         disabled={isLoading}
//         register={register}
//         errors={errors}
//         required
//       />
//     </div>
//   );

//   if (step === MESSAGE_STEPS.IMAGES) {
//     bodyContent = (
//       <div className="flex flex-col gap-8">
//         <Heading title="Add an image to your message" subtitle="Make it more engaging!" />
//         <ImageUpload value={imageSrc} onChange={(value: File | string) => setCustomValue("imageSrc", value)} />
//       </div>
//     );
//   }

//   if (step === MESSAGE_STEPS.RECIPIENTS) {
//     bodyContent = (
//       <div className="flex flex-col gap-8">
//         <Heading title="Who do you want to send this message to?" subtitle="Select recipients!" />
//         {/* <RecipientSelect value={recipients} onChange={(value: string[]) => setCustomValue("recipients", value)} /> */}
//       </div>
//     );
//   }

//   return (
//     <Modal
//       isOpen={messageModal.isOpen}
//       onClose={messageModal.onClose}
//       onSubmit={handleSubmit(onSubmit)}
//       actionLabel={actionLabel}
//       secondaryActionLabel={secondaryActionLabel}
//       secondaryAction={step === MESSAGE_STEPS.CONTENT ? undefined : onBack}
//       title="Send a message!"
//       body={bodyContent}
//     />
//   );
// };

// export default MessageModal;