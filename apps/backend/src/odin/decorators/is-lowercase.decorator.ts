import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
} from "class-validator";

export function IsLowercase(validationOptions?: ValidationOptions) {
    return function (object: object, propertyName: string) {
        registerDecorator({
            name: "isLowercase",
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value: any) {
                    const lowercaseRegex = /^[a-z]+$/;
                    return (
                        typeof value === "string" && lowercaseRegex.test(value)
                    );
                },
                defaultMessage(args: ValidationArguments) {
                    return (
                        args.constraints[0] ||
                        "Text must be in lowercase and contain no numbers!"
                    );
                },
            },
        });
    };
}
