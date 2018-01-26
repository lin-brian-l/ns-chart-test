# NativeScript Angular Template

This template was built off of the default "hello-world" template and demonstrates a minor formatting bug with tkCartesianVerticalAxis and labelMargin. labelMargin is applied correctly for tkCartesianHorizontalAxis on both iOS and Android, but when applied to tkCartesianVerticalAxis, the label closest to the origin does not have the margin on iOS.