import React from "react";
import { FlowFooterContainer } from "../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers";
import { MainText } from "../../atoms/DataProductizationAtoms/FlowModalAtoms/ParagraphAtoms";
import FlowModalFooterButton from "./FlowModalFooterButton";
import { useSelector, useDispatch } from "react-redux";
import { setFlowOrStep, setValidations } from "../../../redux/DPSlice";
import TagManager from "react-gtm-module";

const FlowPageFooter = ({
	footerText,
	action,
	tools,
	hasReportButton,
	disabled,
	passwordCheck,
	isLast,
}) => {
	const { flow, moveAction, updateCall, step } = tools;
	const { emailValid } = useSelector(({ DPState }) => DPState.validations);

	const submitTag = () => {
		console.log("Tag Call flow less");
		TagManager.dataLayer({
			dataLayer: { event: "test_your_site_form_submit" },
		});
	};
	const dispatch = useDispatch();
	const validateFirstStep = (free) => {
		dispatch(setValidations({ types: ["emailValid"] }));
		if (emailValid.value) {
			free ? action("freeTrail") : action("monthlyReport");
			updateCall();
			submitTag();
		}
	};
	return (
		<FlowFooterContainer>
			<FlowModalFooterButton
				disabled={disabled || !(emailValid.value ?? true) || passwordCheck}
				action={() => (flow ? moveAction() : validateFirstStep("free"))}
				text={footerText}
			/>
			{!flow || hasReportButton ? (
				<MainText
					disabled={disabled || !(emailValid.value ?? true)}
					onClick={() => validateFirstStep()}
					clickable
				>
					I only want to get a monthly report
				</MainText>
			) : (
				""
			)}
			{flow && !isLast ? (
				<MainText
					onClick={() => {
						dispatch(
							setFlowOrStep({
								...(step ? { step: -1 } : { flow: "reset" }),
							}),
						);
					}}
					clickable
				>
					Go to Previous Step
				</MainText>
			) : (
				""
			)}
		</FlowFooterContainer>
	);
};
export default FlowPageFooter;
