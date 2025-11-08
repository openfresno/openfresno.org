import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import { SectionType } from "@/utility/constants/theme";
import { themes } from "@/components/ui/MaterialTheme";
import { ThemeProvider } from "@mui/material";
import { IconX } from "@/components/ui/icon/IconX";

/**
 * @component
 * @param {object} [props]
 * @param {string} [props.title] The title of the Dialog
 * @param {JSX.Element} [props.children] The contents of the dialog
 * @param {boolean} [props.openState] The state of the Dialog
 * @param {()=>null} [props.handleClose] The that sets openState to false
 * @param {SectionType} [props.sectionType]
 * @returns {JSX.Element}
 * @constructor
 */
export default function SimpleDialog({
                                       title = "",
                                       children = (<></>),
                                       openState = false,
                                       handleClose = () => {
                                       },
                                       sectionType = SectionType.light,
                                       ...props
                                     }) {
  return (
    <ThemeProvider theme={themes[sectionType]}>
      <Dialog
        className={"Test"}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openState}
        sx={{
          "& .MuiPaper-root": {
            "--Paper-overlay": "none!important"
          }
        }}
        {...props}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <span className={`sub-heading-main`}>{title}</span>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500]
          })}
        >
          <IconX width="24px" height="24px" />
        </IconButton>
        <DialogContent>
          {children}
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
}