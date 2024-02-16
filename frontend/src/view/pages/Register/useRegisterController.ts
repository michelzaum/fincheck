import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from '@tanstack/react-query';
import { z } from "zod";
import { toast } from 'react-hot-toast';

import { authService } from "../../../app/services/authService";
import { SignUpParams } from "../../../app/services/authService/signup";

const schema = z.object({
  name: z.string()
    .min(1, 'Nome é obrigatório'),
  email: z.string()
    .min(1, 'E-mail é obrigatório')
    .email('Informe um e-mail válido'),
  password: z.string()
    .min(1, 'Senha é obrigatória')
    .min(8, 'Senha deve conter pelo menos 8 dígitos')
});

type FormData = z.infer<typeof schema>;

export function useRegisterController() {
  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: SignUpParams) => {
      return authService.signup(data);
    },
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      console.log(accessToken);
    } catch {
      toast.error('Ocorreu um erro ao criar a sua conta!')
    }
  })

  return { register, handleSubmit, errors, isLoading }
}
