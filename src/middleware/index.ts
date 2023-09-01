import { checkUserSchedule } from "./chekUserSchedule.middleware";
import { emailExists } from "./emailExists.middleware";
import { handleErrors } from "./handleErrors.middleware";
import validateAdmin from "./validateAdmin.middleware";
import { validateBody } from "./validateBody.middleware";
import { validateCategoryName } from "./validateCategoryName.middleware";
import { validateId } from "./validateId.middleware";
import { verifyToken } from "./validateToken.middleware";
import verifyIsAdmin from "./verifyIsAdmin.middleware";

export default { handleErrors, validateBody, validateId, verifyToken, validateAdmin, verifyIsAdmin, emailExists, validateCategoryName, checkUserSchedule };