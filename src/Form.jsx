import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  Box,
  FormLabel,
  FormControl,
  Input,
  Button,
  Radio,
  RadioGroup,
  Stack,
  Tooltip,
} from '@chakra-ui/react'
import { InfoOutlineIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { pascalStrToSpacedWord } from './helper'

function Form({ fieldInfo, passBackResults }) {
  const [canSubmitForm, setCanSubmitForm] = useState(false)
  const {
    handleSubmit,
    register,
    getValues,
    control,
    formState: { errors, isSubmitting },
  } = useForm()

  const FormInfoLabel = ({ name, info }) => {
    const spacedName = pascalStrToSpacedWord(name)
    return (
      <FormLabel htmlFor={name}>
        {spacedName}{' '}
        {info && (
          <Tooltip label={info}>
            <InfoOutlineIcon />
          </Tooltip>
        )}
      </FormLabel>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(passBackResults)}
      onChange={() => {
        const resultsAreValid = Object.values(getValues()).every(
          (i) => typeof i === 'string' && i.length > 0
        )
        setCanSubmitForm(resultsAreValid)
      }}
    >
      <FormControl>
        {fieldInfo.map((field) => {
          const { name, type, description } = field
          return (
            <Box key={name} m={4}>
              <FormInfoLabel name={name} info={description} />

              {type === 'date' && (
                <Input
                  id={name}
                  type="date"
                  {...register(name, {
                    required: 'This is required',
                  })}
                />
              )}

              {type === 'number' && (
                <Input
                  id={name}
                  type="number"
                  placeholder={name}
                  {...register(name, {
                    required: 'This is required',
                  })}
                />
              )}
              {type === 'boolean' && (
                <Controller
                  name={name}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <RadioGroup onChange={onChange} value={value}>
                      <Stack direction="row">
                        <Radio value="1">Yes</Radio>
                        <Radio value="0">No</Radio>
                      </Stack>
                    </RadioGroup>
                  )}
                />
              )}
            </Box>
          )
        })}
      </FormControl>
      <Box key={name} m={4}>
        <Button
          w="100%"
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
          disabled={!canSubmitForm}
        >
          Claim <ExternalLinkIcon m={2} />
        </Button>
      </Box>
    </form>
  )
}

export default Form
